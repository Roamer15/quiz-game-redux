const QUIZ_URL = import.meta.env.VITE_BASE_QUESTION

export const fetchQuestions = async () => {
  try {
    const response = await fetch(QUIZ_URL)
    if (!response.ok) {
      throw new Error('URL not found')
    }
    const data = await response.json()
    console.log(data.results)
    return data.results
  } catch (error) {
    console.error(error)
    // return[]
  }
}

export default fetchQuestions


//well i reallly don't know but i have a soft spot for Context API so the second title should work. Well so my experience with react goes like this. After completing my Javascript course and having heard about react, i was really excited and knew tha the long and tedious processes i did in Vanilla Javascript were going to be cut short and life will become easy. Iwas so enthusiastic that i took some lessons before hand to understand react and itwas really good. Then we officially started the react class and my enthusiasm turned into a little despair. I got confused and found it difficult to understand when we were introduced hooks. It took me over 2 weeks to understand properly what useState and useEffect were used for, but it didn't end there as more hooks came in like useRef, useCallback, useMemo and custom hooks. It made it a living hell though at least i grabbed one or two things due the projects we were often asked to do like a simple shopping cart, a user dashboard using formik and yup which i actually understood, a quiz app which made me fully understand how to fetch API data and use it properly. Then I got to learn about react-router it was pretty easy to understand and it went on like magic. After all that, we were introduced to State managers like ContextAPI which i will later on fall in love with and Redux which i still have problems with. I finally understood all the basics in React, creation of hooks, react hooks, Context API and promises when i was faced with my best project so far a movie explorer app. I love it personally cuz i touched all i had learned