const fetcher = async (
  ...args: any[]
) => {
  const res = await fetch(...args);

  if(!res.ok) {
    const error: any = new Error('An error occurred while fetching the data.')
    
    error.info = await res.json()
    error.status = res.status
    throw error
  }

  return res.json();
};

export default fetcher
