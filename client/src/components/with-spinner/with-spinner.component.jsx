import Spinner from "../spinner/spinner.component";

import React from "react";

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
  return isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />;
};

//ARE THE SAME
// const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps });
//     return isLoading ? (
//         <SpinnerOverlay>
//             <SpinnerContainer />
//         </SpinnerOverlay>
//     ) : (
//         <WrappedComponent {...otherProps} />
//     );

export default WithSpinner;
