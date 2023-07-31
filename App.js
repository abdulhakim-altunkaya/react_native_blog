import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { BlogProvider } from './src/context/BlogContext';
import BlogDetails from "./src/screens/BlogDetails";
import HomeScreen from "./src/screens/HomeScreen";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    details: BlogDetails,
    create: CreateScreen,
    edit: EditScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Blog Treasure"
    }
  }
);

const App = createAppContainer(navigator);

export default () => {
  return(
    <BlogProvider>
      <App />
    </BlogProvider>
  )
}