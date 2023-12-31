const activemembersSchema = {
  name: "string",
  avatar: {
    blurDataURL: "string",
    blurHeight: "number",
    blurWidth: "number",
    height: "number",
    src: "string",
    width: "number",
  },
  github: "string",
  twitter: "string",
  blogUrl: "string",
  linkedin: "string",
}

export default activemembersSchema
