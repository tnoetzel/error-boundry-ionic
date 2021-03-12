import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import ErrorBoundary from '../components/ErrorBoundary';
import Test from '../components/Test';
import Layout from '../components/Layout';

function throwError(shouldError: boolean) {
  if (shouldError) {
    throw Error("I crashed");
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
          <Layout>
            <div>
              {/* EB DOES CATCH */}
              <Test />
              {/* EB DOES NOT CATCH */}
              {/* {throwError(true)} */}
            </div>
          </Layout>
        </ErrorBoundary>

      </IonContent>
    </IonPage>
  );
};

export default Home;
