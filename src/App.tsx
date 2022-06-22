import { gql, useQuery } from "@apollo/client";

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`

interface LessonsProps {
  id: string;
  title: string
}

function App() {
  const { data } = useQuery<{ lessons: LessonsProps[] }>(GET_LESSONS_QUERY)
  console.log(data)

  return (
    <ul>
      {data?.lessons.map(lesson => {
        return <li key={lesson.id}>{lesson.title}</li>
      })}
    </ul>
  )
}

export default App
