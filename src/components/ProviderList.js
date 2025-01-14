import React from 'react';
import { Avatar, List, ListItem, ListItemText, Typography, Rating } from '@mui/material';

const ProviderList = ({ providers, handleProviderSelect }) => (
  <List>
    {providers?.map((provider) => (
      <ListItem key={provider.id} sx={{ backgroundColor: 'white', borderRadius: '10px', mb: 1 }} button onClick={() => handleProviderSelect(provider)}>
        <Avatar sx={{ mr: 2 }}>{provider.name[0]}</Avatar>
        <ListItemText 
          primary={provider.name} 
          secondary={
            <>
              <Typography component="span" variant="body2" color="text.primary">
                {provider.location}
              </Typography>
              <br />
              {provider.occupation}
            </>
          } 
        />
        <Rating value={provider.rating} readOnly size="small" />
      </ListItem>
    ))}
  </List>
);

export default ProviderList;