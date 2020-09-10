import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './AddExpense.css';

const AddExpense: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Add Expense</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Add Expense</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <label>
            Category:
            <input type="text" name="category" />
          </label>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default AddExpense;
