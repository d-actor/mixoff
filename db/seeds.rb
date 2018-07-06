#seed users
i = 1
6.times do
  User.create(
    email: "test#{i}@test.com",
    name: "Test#{i}",
    spotify_name: "danltactor",
    password: "password"
  )
  i += 1
end

