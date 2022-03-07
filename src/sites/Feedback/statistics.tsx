import { doc, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import FirebaseServices from '../../firebase/firebaseServices';
import { IFeedback } from '../../types/feedback';
import styles from './Feedback.module.scss'

type StatisticsProps = {

}

const Statistics: React.FC<StatisticsProps> = () => {
	const [feedbackData, setFeedbackData] = useState<IFeedback>();

	useEffect(() => {
		console.log('useEffect firing');

		const firebaseInstance = FirebaseServices.getFirestoreInstance();
		const unsub = () => onSnapshot(doc(firebaseInstance, 'feedback', 'feedbacks'), snap => {
				const data = snap.data() as IFeedback;
				setFeedbackData(data);
		});

		return unsub();
	}, []);
  const percent = feedbackData
    ? (feedbackData.good/(feedbackData.good+feedbackData.neutral+feedbackData.poor)*100||0)
    : 0;
  return (
    <div className={styles.Statistics}>
      <p>Good: {feedbackData?.good ?? 0}</p>
			<p>Neutral: {feedbackData?.neutral ?? 0}</p>
			<p>Poor: {feedbackData?.poor ?? 0}</p>
			<p>positive Feedback: {percent}%</p>
    </div>
  )
}

export default Statistics
