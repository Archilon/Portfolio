import React,{ useEffect, useState } from 'react'
import styles from './Feedback.module.scss'
import Popup from 'reactjs-popup';
import { doc, updateDoc, getDoc, } from 'firebase/firestore';
import 'reactjs-popup/dist/index.css';
import FirebaseServices from '../../firebase/firebaseServices';

type FeedbackProps = {}

const FEEDBACK_KEY = 'feedkey';

interface IFeedback {
  good: number,
  neutral: number,
  poor: number,
}
var good:number|undefined = 0;
let neutral:number|undefined = 0;
let poor:number|undefined = 0;

const Feedback: React.FC<FeedbackProps> = () => {
  const [myFeedback, setMyFeedback] = useState<IFeedback|undefined>(undefined);
  const [feedbackGiven, setFeedbackGiven] = useState<boolean>(JSON.parse(localStorage.getItem(FEEDBACK_KEY) ?? 'false'))

  useEffect(() => {
    console.warn('getting data from firestore!');

    const unsubscribe = () => {
      getFeedback()
      .then((data) => {
        console.log('dataa')
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
      console.log('onnistui');
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
  const updateStatistics = () => {
    return(
    good = myFeedback!.good,
    neutral = myFeedback!.neutral,
    poor = myFeedback!.poor
  )
}
  const percent = myFeedback
    ? (myFeedback.good/(myFeedback.good+myFeedback.neutral+myFeedback.poor)*100||0)
    : 0;

  return (
    !myFeedback
    ? null
    : <Popup trigger={<button> Feedback</button>} position="right top">
      <div className={styles.container}>
        <h2>Feedback</h2>
        <table>
          <tbody>
            {
              feedbackGiven
              ? (updateStatistics(),
                  <div className={styles.statistics}>
                    <td>
                      <p>Good: </p>
                      <p>Neutral: </p>
                      <p>Poor: </p>
                      <p>Positive feedback:</p>
                    </td>
                    <td>
                      <p>{good}</p>
                      <p>{neutral}</p>
                      <p>{poor}</p>
                      <p>{percent}%</p>
                    </td>
                  </div>
                )
              : (
                <tr>
                    <div className={styles.buttons}>
                      <button 
                        onClick={() => {
                          console.log('asd')
                          if (!myFeedback) return;
                          console.log('dsa')
                          setMyFeedback({
                            good: myFeedback.good++,
                            neutral: myFeedback.neutral,
                            poor: myFeedback.poor,
                          });
                          setFeedbackGiven(true);
                          sendFeedback();
                          updateStatistics();
                          localStorage.setItem(FEEDBACK_KEY, 'true');
                        }}>Good
                      </button>

                      <button 
                        onClick={() => {
                          if (!myFeedback) return;
                          console.log('dsa')
                          setMyFeedback({
                            good: myFeedback.good,
                            neutral: myFeedback.neutral++,
                            poor: myFeedback.poor,
                          });
                          setFeedbackGiven(true);
                          sendFeedback();
                          updateStatistics();
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
                          updateStatistics();
                          localStorage.setItem(FEEDBACK_KEY, 'true');
                        }}>Poor
                      </button>
                    </div>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </Popup>
        );
        }

export default Feedback

