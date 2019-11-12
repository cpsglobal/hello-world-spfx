import * as React from 'react';
import styles from './HelloWeb.module.scss';

export interface IHelloWebProps {
  getWeb(): Promise<{}>;
}

interface IHelloWebState {
  loaded: Boolean;
  web: {};
  error: Error;
}

export class HelloWeb extends React.Component<IHelloWebProps, IHelloWebState> {

  constructor(props: Readonly<IHelloWebProps>) {
    super(props);
    this.state = {
      loaded: false,
      web: null,
      error: null
    };
  }

  public componentDidMount() {
    this.props.getWeb()
      .then((web: {}) => {
        this.setState({
          loaded: true,
          web: web
        });
      }, (error) => {
        this.setState({
          error: error
        });
      });
  }

  public render(): React.ReactElement<IHelloWebProps> {
    return (
      <div className={styles.helloWeb}>
        <div className={styles.container}>
          {this.state.loaded && this.state.web &&
            <div className={styles.row}>
              <div className={styles.column}>
                <h1>{this.state.web['Title']}</h1>
                <div><a href={this.state.web['Url']}>Link</a></div>
              </div>
            </div>}
          {this.state.error &&
            <div className="error">{this.state.error.message}</div>
          }
        </div>
      </div>
    );
  }
}
