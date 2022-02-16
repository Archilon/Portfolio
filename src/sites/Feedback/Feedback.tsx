import React,{ useState } from 'react'
import styles from './Feedback.module.scss'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

type FeedbackProps = {}
var feedbackGiven: boolean = false;

const Feedback: React.FC<FeedbackProps> = () => {

  const [good, setgood] = useState(0);
  const [neutral, setneutral] = useState(0);
  const [poor, setpoor] = useState(0);
  const percent = (good/(good+neutral+poor)*100||0);

  return (
    <Popup trigger={<button> Feedback</button>} position="right top">
      <div className={styles.container}>
        <h2>Feedback</h2>
        <table>
          <tbody>
            <tr>
                <div className={styles.buttons}>
                  <button 
                    onClick={() => {
                      setgood(good + 1);
                      feedbackGiven = true;
                                    }}>Good
                </button>
                  <button 
                    onClick={() => {
                      setneutral(neutral + 1);
                      feedbackGiven = true;
                                    }}>Neutral
                  </button>
                  <button 
                    onClick={() => {
                      setpoor(poor + 1);
                      feedbackGiven = true;
                                    }}>Poor</button>
                </div>
            </tr>
            {Statistics(good, neutral, poor, percent)}
          </tbody>
        </table>
      </div>
      
    </Popup>
        );
      }

const Statistics = (
  goods: number,
  neutrals: number,
  poors: number,
  percentages: number
  ) => {
    if(feedbackGiven){
      return(<div>
      <p>this works</p>
      <p>Good: {goods}</p>
      <p>Neutral: {neutrals}</p>
      <p>Poor: {poors}</p>

      </div>
    );
  /* 
  return(

  <div>
  <h2>Statistics</h2>
    <table className={styles.content}>
      <tbody>
        <tr>
          <td>
            <p>Good:</p>
          </td>
          <td>
            <p>{good}</p>
          </td>
        </tr>
        <tr>
         <td>
          <p>Neutral:</p>
          </td>
          <td>
            <p>{neutral}</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Poor:</p>
          </td>
          <td>
            <p>{poor}</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>positive feedback:</p>
          </td>
          <td>
            <p>{}%</p>
          </td>
        </tr>
      </tbody>
  </table>
</div>
)
*/
 }}
export default Feedback

