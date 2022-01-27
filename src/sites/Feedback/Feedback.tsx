import React,{ useState } from 'react'
import styles from './Feedback.module.scss'

type FeedbackProps = {}


const Feedback: React.FC<FeedbackProps> = () => {

const [good, setgood] = useState(0);
const [neutral, setneutral] = useState(0);
const [poor, setpoor] = useState(0);
const percent = (good/(good+neutral+poor)*100||0)
      
        return (
           
          <div className={styles.container}>
            <h2>Feedback</h2>
            <table>
              <tbody>
              <tr>
                  <div className={styles.buttons}>
                    <button onClick={() => setgood(good + 1)}>Good</button>
                    <button onClick={() => setneutral(neutral + 1)}>Neutral</button>
                    <button onClick={() => setpoor(poor + 1)}>Poor</button>
                  </div>
              </tr>
              </tbody>
            </table>
            <h2>Statistics</h2>
              <table className={styles.content}>
                <tbody>

                <tr>
                <td><p>Good:</p></td><td><p>{good} </p></td>
                </tr>
                <tr>
                <td><p>Neutral:</p></td><td><p>{neutral} </p></td>
                </tr>
                <tr>
                <td><p>Poor:</p></td><td><p>{poor} </p></td>
                </tr>
                <tr>
                <td><p>positive feedback:</p></td><td><p>{percent}% </p></td>
                </tr>
                </tbody>
            </table>
          </div>
        );
      }



export default Feedback

