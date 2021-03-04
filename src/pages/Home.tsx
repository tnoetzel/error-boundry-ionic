import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import ErrorBoundary from '../components/ErrorBoundary';

function throwError(shouldError: boolean) {
  if (shouldError) {
    throw Error("I crashed");
  } else {
    return <></>;
  }
}

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>

        <ErrorBoundary>
          YO
              {throwError(true)}
        </ErrorBoundary>

        <ExploreContainer />

      </IonContent>
    </IonPage>
  );
};

export default Home;
