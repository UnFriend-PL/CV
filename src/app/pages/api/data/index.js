export default (req, res) => {
  const data = {
    message: "To jest przykładowa odpowiedź z API Next.js.",
  };

  res.status(200).json(data);
};
