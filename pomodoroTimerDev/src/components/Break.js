const Break = () => {
  const [breakTime, setBreakTime] = useState(300); // 5 minutos

  useEffect(() => {
    const interval = setInterval(() => {
      if (breakTime > 0) setBreakTime(breakTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [breakTime]);

  return (
    <View>
      <Text>Break: {Math.floor(breakTime / 60)}:{('0' + (breakTime % 60)).slice(-2)}</Text>
    </View>
  );
};

export default Break;
