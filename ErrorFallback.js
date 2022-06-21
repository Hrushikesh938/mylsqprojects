export const ErrorFallback=({error,resetErrorBoundary})=>{
    return (
      <div role="alert">
        <p style={{color: 'red',fontSize:20}}>Something went wrong:</p>
        <pre style={{color: 'red'}}>{error.message}</pre>
        <button onClick={resetErrorBoundary}>Try again</button>
      </div>
    )
  }