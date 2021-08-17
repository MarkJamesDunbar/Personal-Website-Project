import Theme from '../styles/theme';
import {motion} from 'framer-motion';
import { Router } from 'react-router';

export default function App({ Component, pageProps, router }) {
  return (
    <Theme>
      <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={{
        pageInitial: {
          opacity:0
        },
        pageAnimate: {
          opacity: 1,
          transition: {
            duration: .6
          }
        },
      }}>
        <Component {...pageProps} />
      </motion.div>
  </Theme>

  );
}
 