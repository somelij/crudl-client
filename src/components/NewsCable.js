import { useEffect } from 'react';
import { createConsumer } from '@rails/actioncable';

const NewsCable = ({ onReceived }) => {
    useEffect(() => {
        const consumer = createConsumer();

        const subscription = consumer.subscriptions.create('NewsChannel', {
            received(data) {
                onReceived(data);
            },
        });

        return () => {
            consumer.disconnect();
        };
    }, [onReceived]);

    return null;
};

export default NewsCable;