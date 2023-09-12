export const handleHttpError = (error: any, context: string): void => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(error, context);
  }
};

export default handleHttpError;
