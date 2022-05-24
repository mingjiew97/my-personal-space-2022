import * as React from 'react';
import { gsap } from "gsap";
import styles from './page_enter_animation.module.scss';

export default function PageEnterAnimation() {
    // set GSAP Timeline
    const [tl] = React.useState<GSAPTimeline>(gsap.timeline());
    React.useEffect((): void => {
        // set GSAP timeline
        tl.fromTo(
            document.querySelector(`#test-id`),
            {
                opacity: 0,
                y: '-100%',
            },
            {
                duration: 1,
                opacity: 1,
                y: '0%',
            },
        );
    }, []);

    return (
        <div id="test-id">
            <h1 className={styles.test}>PageEnterAnimation</h1>
        </div>
    );
}