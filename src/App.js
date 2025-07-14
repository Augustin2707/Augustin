import logo from './logo.svg';
import './App.css';

function App() {

  let contacts = [
    {id:1,type_marchandise: "Augustin",poids:"MC",destination:"MC",date_expedition:"MC",date_arrivee_prevue:"MC",statut:"MC",client:"MC",contact_client:"MC" },
    {id:2,type_marchandise: "mc",poids:"MC",destination:"MC",date_expedition:"MC",date_arrivee_prevue:"MC",statut:"MC",client:"MC",contact_client:"MC" }
  ]

  return (
    <div className="App">
     <h1> Teste I13B </h1>
     <table border="1">
            <thead>
                <tr>
                <th>type_marchandise</th>
                    <th>poids</th>
                    <th>destination</th>
                    <th>date_expedition</th>
                    <th>date_arrivee_prevue</th>
                    <th>statut</th>
                    <th>client</th>
                    <th>contact_client</th>
                    <th>Actions</th>

                </tr>
            </thead>
            <tbody>
                {contacts.map(contact => (
                    <tr key={contact.id}>
                      <td>{contact.type_marchandise}</td>
                        <td>{contact.poids}</td>
                        <td>{contact.destination}</td>
                        <td>{contact.date_expedition}</td>
                        <td>{contact.date_arrivee_prevue}</td>
                        <td>{contact.statut}</td>
                        <td>{contact.client}</td>
                        <td>{contact.contact_client}</td>

                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    );
};

export default App;
