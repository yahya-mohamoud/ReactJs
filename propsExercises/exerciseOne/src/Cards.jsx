
import React from 'react'

function Card( {contact}) {
    return (
        <>
            <div className="container">
            <div className="card">
                <div className="flex">
                <h1>{contact.name}</h1>
                <img src={contact.imgUrl} alt={name} className="avatar" />
                </div>
                <p>I am a {contact.profession}</p>
                <p>{contact.email}</p>
            </div>

            </div>
        </>
    )
}

function Cards() {
    const contacts = [
        {
           name: "Ali Abdi",
           imgUrl: "https://img.freepik.com/premium-vector/young-man-vector-avatar-flat-style-design-vector-illustration_1268170-1802.jpg?w=900",
           profession: "senior software engineer",
           email: "senior@email.com"

        }, 
        {
            name: "Gedi moha",
            imgUrl: "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?ga=GA1.1.2058701043.1738604000&semt=ais_hybrid&w=740",
            profession: "Data anlyst",
            email: "data12@gmail.com"
        },
        {
            name: "Gedi moha",
            imgUrl: "https://img.freepik.com/free-vector/young-prince-royal-attire_1308-176144.jpg?ga=GA1.1.2058701043.1738604000&semt=ais_hybrid&w=740",
            profession: "ceo of StartUp",
            email: "ceo@gmail.com"
        },
        {
            name: "Abdi hasen",
            imgUrl: "https://img.freepik.com/premium-vector/young-man-vector-avatar-flat-style-design-vector-illustration_1268170-1802.jpg?w=900",
            profession: "DataBase administrator",
            email: "db12@gmail.com"
        },

]

        const listItems = contacts.map((person) => {
            
        })

     return(
        <>

        <div className="container">
        <Card 
            contact={contacts[0]}
        />
        <Card 
            contact={contacts[1]}
        />
        <Card 
          contact={contacts[2]}
        />
        <Card 
           contact={contacts[3]}
        />
        </div>
        </>
     ) 
}



export default Cards