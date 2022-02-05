import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, BrowserRouter as Router, Redirect,} from 'react-router-dom';

import { login } from '../actions/auth';
import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';
import { onAuthStateChanged, getAuth } from '../firebase/firebase-config';

export const AppRouter = () => {

    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState( false );

    useEffect(() => {
      
        const auth = getAuth();
        onAuthStateChanged( auth, (user) => {
            
            if( user?.uid ) {
                dispatch( login( user.uid, user.displayName ));
                setIsLoggedIn( true );
            }

            setChecking( false );

        });

    }, [ dispatch, setChecking, setIsLoggedIn ] );
    
    if( checking ) {
        return (
            <h1>Wait...</h1>
        )
    }

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
