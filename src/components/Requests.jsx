import {Grid} from '@material-ui/core';
import React, {useState} from 'react';
import RequestCard from './RequestCard';
import AddIcon from '@material-ui/icons/Add';
import faker from "faker";
import IconButton from '@material-ui/core/IconButton';

const Requests = () => {
    const [requests, setRequests] = useState([]);
    const [id, setId] = useState(0);

    const createRequest = () =>{
        const singleRequest = {
            id: id,
            avatar: faker.image.image(),
            name: faker.fake("{{name.firstName}} {{name.lastName}}"),
            date: faker.fake("{{date.past}}").substring(4,24),
            text: faker.lorem.sentences(3)
        }

        setRequests(prevRequests => {
            return [...prevRequests, singleRequest];
        })

        setId(id+1);
    }

    return (
        <Grid item container spacing={1} xs={12}>
            <RequestCard name="Nick Vernon" date="Jul 06 2020 01:30:51" text="Hey! I didn't expect to see you here.. Do you remember me?"/>
            <RequestCard name="Jeon Lee" date="Aug 13 2020 10:27:19" text="What's up? I'm new here. Let's connect!"/>
            <RequestCard name="Elizabeth Fleming" date="Dec 05 2019 01:23:17" text="Hello. How are you?"/>
            
            {requests.map(request => {
                return <RequestCard key={request.id} id={request.id} avatar = {request.avatar} name={request.name} date={request.date} text={request.text}/>
            })}

            <IconButton onClick={createRequest} size='small' color="default" aria-label="Add another request">
                <AddIcon/>
            </IconButton>
        </Grid>
    )

}

export default Requests;