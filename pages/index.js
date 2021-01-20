import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { startClock } from '../redux/actions/actions'
import Examples from '../components/examples'
import Link from 'next/link'

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startClock())
  }, [dispatch])
  return (
    <div className={styles.container}>
      <Examples />
      <Link href="/show-redux-state">
        <a>Click to see current Redux State</a>
      </Link>
    </div>
  )
}
