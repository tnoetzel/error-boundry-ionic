import React from "react";

const Test = (props: any) => {
    function throwError(shouldError: boolean) {
        if (shouldError) {
            throw Error("I crashed");
        }
    }

    return (
        <div>
            Test
            {throwError(true)}
        </div>
    );
};

export default Test;