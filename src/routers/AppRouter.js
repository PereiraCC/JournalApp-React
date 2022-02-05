import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, BrowserRouter as Router, Redirect,} from 'react-router-dom';

import { login } from '../actions/auth';
import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';

import { onAuthStateChanged, getAuth } from '../firebase/firebase-config';

import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

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
            } else {
                setIsLoggedIn( false );
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
                    <PublicRoute 
                        path="/auth" 
                        component={ AuthRouter }
                        isAuthenticated={ isLoggedIn }
                    />

                    <PrivateRoute 
                        exact
                        isAuthenticated= { isLoggedIn }
                        path="/"  
                        component={ JournalScreen }
                    />

                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Router>
    );
};
