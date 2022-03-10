import React,{ useEffect, useState } from 'react'
import styles from './Feedback.module.scss'
import Popup from 'reactjs-popup';
import { doc, updateDoc, getDoc, } from 'firebase/firestore';
import 'reactjs-popup/dist/index.css';
import FirebaseServices from '../../firebase/firebaseServices';
import { IFeedback } from '../../types/feedback';
import Statistics from './statistics';
import { PopupPosition } from 'reactjs-popup/dist/types';

type FeedbackProps = {
  postition: PopupPosition
}

const FEEDBACK_KEY = 'feedkey';

const Feedback: React.FC<FeedbackProps> = ({ postition }) => {
  const [myFeedback, setMyFeedback] = useState<IFeedback|undefined>(undefined);
  const [feedbackGiven, setFeedbackGiven] = useState<boolean>(JSON.parse(localStorage.getItem(FEEDBACK_KEY) ?? 'false'))

  useEffect(() => {
    const unsubscribe = () => {
      getFeedback()
      .then((data) => {
        setMyFeedback(data)
      })
      .catch(err => console.error('asd', err.message));
    }

    return unsubscribe();

  }, []);

  const sendFeedback = async () => {
    const firestore = FirebaseServices.getFirestoreInstance();
    //                            collection, doc_id
    const docRef = doc(firestore, 'feedback', 'feedbacks');
    if (!myFeedback) return;
    await updateDoc(docRef, {
      good: myFeedback.good,
      neutral: myFeedback.neutral,
      poor: myFeedback.poor,
    })
    .then(() => {
    })
    .catch((err) => console.error(err.message));
  };

  const getFeedback = async () => {
    const firestore = FirebaseServices.getFirestoreInstance();
    //                            collection, doc_id
    const docRef = doc(firestore, 'feedback', 'feedbacks');

    let data: IFeedback|undefined;

    const feedbackDoc = await getDoc(docRef);
    if (feedbackDoc.exists()) {
      data = feedbackDoc.data() as IFeedback;
    }

    return data;
  }

  return (
    !myFeedback
    ? null
    : <Popup        
        trigger={<button>Feedback</button>}
        position={postition}//{screenWidth > 770 ? 'right top' : 'left top'}
      >
      <div className={styles.container}>
        <h2>Feedback</h2>
        
          
            {
              feedbackGiven
              ? <Statistics />
              : (
                <div>
                      <button 
                        onClick={() => {
                          if (!myFeedback) return;
                          setMyFeedback({
                            good: myFeedback.good++,
                            neutral: myFeedback.neutral,
                            poor: myFeedback.poor,
                          });
                          setFeedbackGiven(true);
                          sendFeedback();
                          getFeedback();
                          localStorage.setItem(FEEDBACK_KEY, 'true');
                        }}>Good
                      </button>

                      <button 
                        onClick={() => {
                          if (!myFeedback) return;
                          setMyFeedback({
                            good: myFeedback.good,
                            neutral: myFeedback.neutral++,
                            poor: myFeedback.poor,
                          });
                          setFeedbackGiven(true);
                          sendFeedback();
                          getFeedback();
                          localStorage.setItem(FEEDBACK_KEY, 'true');
                        }}>Neutral
                      </button>

                      <button 
                        onClick={() => {
                          if (!myFeedback) return;
                          setMyFeedback({
                            good: myFeedback.good,
                            neutral: myFeedback.neutral,
                            poor: myFeedback.poor++,
                          });
                          setFeedbackGiven(true);
                          sendFeedback();
                          getFeedback();
                          localStorage.setItem(FEEDBACK_KEY, 'true');
                        }}>Poor
                      </button>
                      </div>
          )
            }
      </div>
    </Popup>
        );
        }

export default Feedback

