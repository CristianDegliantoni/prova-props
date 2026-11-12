function ProfileCard(props) {
  const dati = props.item

  return (
    <article className="profile-card">
      <div className="profile-avatar" aria-hidden="true">
        {dati.name}
      </div>
      <h3>{dati.name}</h3>
      <p className="profile-role">{dati.role}</p>
      <p>{dati.message}</p>
    </article>
  )
}

export default ProfileCard
