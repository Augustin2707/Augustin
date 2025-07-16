import logo from './logo.svg';
import './App.css';

function App() {

  let contacts = [
    {id:1,type_marchandise: "Tongolo",poids:"75kg",destination:"Maurice",date_expedition:"15/07/25",
      date_arrivee_prevue:"10/10/25",statut:"En transit",client:"MC Augustin",contact_client:"0326156099" },
    {id:2,type_marchandise: "Riz",poids:"1 Tonne",destination:"Mayotte",date_expedition:"12/07/25",
      date_arrivee_prevue:"25/09/25",statut:"En attente ",client:"Bien-Venu",contact_client:"0381877640" },
    {id:3,type_marchandise: "Tomate",poids:"40kg",destination:"Seychelles",date_expedition:"21/07/25",
        date_arrivee_prevue:"16/10/25",statut:"Livrée",client:"Maman'i Luna ",contact_client:"0327878724" },
    {id:4,type_marchandise: "Kida vert ",poids:"5 Tonne",destination:"Comore",date_expedition:"28/06/25",
          date_arrivee_prevue:"02/09/25",statut:"Retardéer",client:"Beloa",contact_client:"0335954801" }
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
                      <button className="modifier">Modifier</button>
                      <button className="supprimer">Supprimer</button>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    );
};

export default App;
