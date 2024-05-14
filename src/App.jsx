import { Provider, ErrorBoundary } from '@rollbar/react'

const rollbarConfig = {
  accessToken: '0ab04cae1ae34420959120069f37b0bc',
  environment: 'testenv',
}

function TestError() {
  const a = null
  return a.hello()
}

export default function App() {

  return (
    <Provider config={rollbarConfig}>
      <ErrorBoundary>
        <TestError />
      </ErrorBoundary>
    </Provider>
  )
}
