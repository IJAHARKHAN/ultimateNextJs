

export default async function page({ params }) {
  const { username } = await params;
  return (    <div>Profile for user: <strong>{username}</strong></div>
  )
}

///// Dynamic Routes: These routes can change based on parameters. For example, /profile/[username] where [username] is a dynamic segment that can be replaced with any value


/*
## Types of Routes
1. Static Routes: These are fixed routes that do not change. For example, /about or /contact.
2. Dynamic Routes: These routes can change based on parameters. For example, /profile/[username] where [username] is a dynamic segment that can be replaced with any value.
3. Catch-All Routes: These routes can match any path that follows a certain pattern. For example, /profile/[...username] can match /profile/john, /profile/jane, or even /profile/john/doe.
4. Optional Catch-All Routes: These routes can match paths that may or may not have additional segments. For example, /profile/[[...username]] can match /profile, /profile/john, or /profile/john/doe.

*/