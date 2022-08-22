import React, {forwardRef} from 'react'
import {CardContent, Card, Typography} from '@material-ui/core'
import './Message.css'

const Message = forwardRef(({key,userName,message},ref) => {
  const isUser = userName === message.userName
  return (
    <div ref={ref} key={key} className="msg">
        {/* <h2>{name}:{text}</h2> */}
        <Card className={`message ${isUser ? 'user' :''}`}>
            <CardContent>
                <Typography variant='h5' component='h2'>
                    {!isUser && `${message.userName}:`}{message.message}
                </Typography>
            </CardContent>
        </Card>
    </div>
  )
})

export default Message