const GetEventsOfFriends = async (req, res) => {
  try {
    const events = await GetEventsOfFriends.findAll({
      where: { user_id: req.params.user_id },
      include: [
        {
          model: User,
          as: "friends",
          attributes: ["id", "user_name"],
          include: [{ model: Event, where: { private: false } }],
        },
      ],
    });
    res.send(events);
  } catch (error) {
    throw error;
  }
};
