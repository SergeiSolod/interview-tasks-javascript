let createCounter = (init) => {
    let theCurrent = init;

    return (
        {
        increment: ()=>(++theCurrent),
        decrement: ()=>(--theCurrent),
        reset: ()=>theCurrent=init,
        }
    );
};
