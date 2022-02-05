import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, BrowserRouter as Router, Redirect,} from 'react-router-dom';

import { login } from '../actions/auth';
import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';
import { onAuthStateChanged, getAuth } from '../firebase/firebase-config';

export const AppRouter = () => {

    const dispatch = useDispatch();

    useEffect(() => {
      
        const auth = getAuth();
        onAuthStateChanged( auth, (user) => {
            
            if( user?.uid ) {
                dispatch( login( user.uid, user.displayName ));
            }

        });

    }, [ dispatch ]);
    

    return (
        <Router>
            <div>
                <Switch>
                    <Route 
                        path="/auth" 
                        component={ AuthRouter }
                    />

                    <Route 
                        exact
                        path="/"  
                        component={ JournalScreen } 
                    />

                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Router>
    );
};
