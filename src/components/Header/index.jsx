import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import Container from '@mui/material/Container';
import { resetUserData } from '../../redux/slices/auth';

export const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.data);

  const logout = () => {
    localStorage.removeItem('token');
    dispatch(resetUserData());
  };

  return (
    <div className={styles.root}>
      <Container maxWidth="lg">
        <div className={styles.inner}>
          <Link className={styles.logo} to="/">
            <div>SHIZA BLOG</div>
          </Link>
          <div className={styles.buttons}>
            {user ? (
              <>
                <Link to="/posts/create">
                  <Button variant="contained">Write an article</Button>
                </Link>
                <Button onClick={logout} variant="contained" color="error">
                  Sign out
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outlined">Sign in</Button>
                </Link>
                <Link to="/register">
                  <Button variant="contained">Sign up</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};
