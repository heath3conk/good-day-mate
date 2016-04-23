# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.create(
  first_name: "Ryan",
  last_name: "Smith",
  email: "ryan@something.com",
  password: "password")

User.create(
  first_name: "Taylor",
  last_name: "Daugherty",
  email: "taylor@something.com",
  password: "password")

User.create(
  first_name: "Jack",
  last_name: "Pults",
  email: "jack@something.com",
  password: "password")

User.create(
  first_name: "Heather",
  last_name: "Conklin",
  email: "heather@something.com",
  password: "password")

Stream.create(label: "Ryan Stream", user_id: 1)
Stream.create(label: "Taylor Stream", user_id: 2)
Stream.create(label: "Jack Stream", user_id: 3)
Stream.create(label: "Heather Stream", user_id: 4)

Tracker.create(creator_id: 1, label: "Tires", unit: "PSI")
TrackerValue.create(tracker_id: 1, value: 36.2)
Inclusion.create(stream_id: 1, order: 2,
  includable_id: 1, includable_type: "Tracker")

Timer.create(creator_id: 0, label: "exercise", duration: 10)
Inclusion.create(stream_id: 1, order: 3,
  includable_id: 1, includable_type: "Timer")

Placeholder.create(creator_id: 0, icon: "😁", label: "basic smiley")
Inclusion.create(stream_id: 1, order: 1,
  includable_id: 1, includable_type: "Placeholder")

gratitudes = ["family", "friends", "nice weather", "books", "a good night's sleep",
"excellent food", "health", "food", "sleep", "Corgis", "moon & stars",
"biking", "sunsets", "coffee", "hot showers", "movie night", "cats", "puppies",
"summer coming", "graduating soon", "learning", "great experience at DBC",
"new friends", "old friends", "change", "travel", "clean sheets", "soap", "chairs"]


