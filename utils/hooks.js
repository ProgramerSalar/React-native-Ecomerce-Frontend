import { useEffect } from "react";
import Toast from "react-native-toast-message";
import { useSelector } from "react-redux";

export const useMessageAndErrorUser = (
  navigation,
  dispatch,
  navigateTo = "login"
) => {
  const { loading, message, error, isAuuthenticated } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (error) {
      Toast.show({
        type: "error",
        text1: error,
      });
      dispatch({
        type: "clearError",
      });
    }

    if (message) {
      navigation.reset({
        index: 0,
        routes: [{ name: navigateTo }],
      });
      Toast.show({
        type: "success",
        text1: message,
      });
      dispatch({
        type: "clearMessage",
      });
    }
  }, [error, message, dispatch]);

  return loading;
};

export const useMessageAndErrorOther = (
  dispatch,
  navigation,
  navigateTo,
  func
) => {
  const { loading, message, error } = useSelector((state) => state.other);

  useEffect(() => {
    if (error) {
      Toast.show({
        type: "error",
        text1: error,
      });
      dispatch({
        type: "clearError",
      });
    }

    if (message) {
      Toast.show({
        type: "success",
        text1: message,
      });
      dispatch({
        type: "clearMessage",
      });

      navigateTo ? navigation.navigate(navigateTo) : null

      func ? dispatch(func()) : null;
    }
  }, [error, message, dispatch]);

  return loading;
};
