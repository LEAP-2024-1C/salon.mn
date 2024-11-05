import { model, Schema } from "mongoose";

interface IAbout {
  text: String;
  image: String;
}

const aboutSchema = new Schema<IAbout>({
  text: {
    type: Text,
  },
  image: {
    type: String,
  },
});

const About = model<IAbout>("About", aboutSchema);

export default About;
