import ProfileCard from './components/ProfileCard'

const profiles = [
  {
    name: 'Giulia',
    role: 'Studentessa',
    message: 'Sto imparando React, un componente alla volta.',
  },
  {
    name: 'Marco',
    role: 'Frontend developer',
    message: 'Uso le props per riutilizzare i miei componenti.',
  },
  {
    name: 'Sara',
    role: 'Designer',
    message: 'Un componente può mostrare contenuti sempre diversi.',
  },
]

const students = [
  {
    name: "gianmarco",
    role: "student",
    desire: "diventare sviluppatore",
  },
  {
    name: "giancarla",
    role: "student",
    desire: "diventare sviluppatrice",
  },
  {
    name: "giovanni",
    role: "student",
    desire: "diventare software engineer",
  },
]

function App() {
  return (
    <main className="app-shell">
      <header className="page-header">
        <p className="eyebrow">React · lezione pratica</p>
        <h1>Impariamo le props</h1>
        <p>
          Le <code>props</code> permettono di passare dati da un componente al
          suo utilizzo.
        </p>
      </header>

      <section className="profiles" aria-labelledby="profiles-heading">
        <h2 id="profiles-heading">Lo stesso componente, dati diversi</h2>

        <div className="profile-grid">
          {profiles.map((profile) => (
            <ProfileCard key={profile.name} item={profile} />
          ))}
        </div>
      </section>


    </main>
  )
}

export default App
