import * as React from 'react';
import ReactStopwatch from 'react-stopwatch';

const Stopwatch = () => (
    // TODO: Handle Unmount
    <ReactStopwatch
        seconds={0}
        minutes={0}
        hours={0}
        limit="00:00:10"
        autoStart={true}
        onChange={({ hours, minutes, seconds }) => {
        }}
        onCallback={() => console.log('Finish')}
        render={({ formatted, hours, minutes, seconds }) => {
            return (
                <div>
                    <p>
                        Time: { formatted }
                    </p>
                </div>
            );
        }}
    />
);

export default Stopwatch;