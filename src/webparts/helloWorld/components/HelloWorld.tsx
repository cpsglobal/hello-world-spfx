import * as React from 'react';
import styles from './HelloWorld.module.scss';
import { PrimaryButton } from 'office-ui-fabric-react';
export interface IHelloWorldProps {
  title: string;
  subTitle: string;
  description: string;
  buttonText: string;
  buttonTarget: string;
}

export const HelloWorld: React.FunctionComponent<IHelloWorldProps> = (props) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    document.getElementById("timesClicked").innerText = `You clicked ${count} times`;
  });

  return (
    <div className={styles.helloWorld}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.column}>
            <span className={styles.title}>{props.title}</span>
            <p className={styles.subTitle}>{props.subTitle}</p>
            <p className={styles.description}>{props.description}</p>
            <a href={props.buttonTarget} className={styles.button}>
              <span className={styles.label}>{props.buttonText}</span>
            </a>
          </div>
        </div>
        <div className={styles.row}>
          <PrimaryButton text="Click Me" onClick={() => setCount(count + 1)} />
          <div id="timesClicked"></div>
        </div>
      </div>
    </div>
  );
};
