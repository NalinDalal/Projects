import { Quote } from "../components/Quote";
import { Auth } from "../components/Auth";
export const Signup = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          Signup
          <Auth type="signup" />
        </div>
        <div className="lg:block none">
          <Quote />
        </div>
      </div>
    </div>
  );
};
