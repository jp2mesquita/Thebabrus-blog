import { previewData } from 'next/headers'

export default function Home() {
  if (previewData()) {
    return <div>Preview Mode</div>
  }

  return (
    <div>
      <h1>Not in Preview Mode</h1>
    </div>
  )
}
