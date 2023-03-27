exports.addUser = (req, res, next) => {
  let tieuDe = "add User new ";

  let users = [
    {
      fullName: "Dinh duy thanh",
      hoten: "thanh",
      email: "thanhph18450@fpt.edu.vn",
      gr: "VN",
      statu: true,
    },
    {
      fullName: "dinh duy thanh",
      hoten: "thanh",
      email: "thanhph18450@fpt.edu.vn",
      gr: "VN",
      statu: true,
    },
    {
      fullName: "dinh duy tahnh",
      hoten: "hi",
      email: "hi123@fpt.edu.vn",
      gr: "VN",
      statu: true,
    },
  ];
  res.render("useradd/Fromadduser.ejs", { title: tieuDe, User: users });
};
