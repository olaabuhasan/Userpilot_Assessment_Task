import Box from "@material-ui/core/Box/Box";
import EmptyPageImg from "assets/svgs/empty-state.svg";
import Typography from "@material-ui/core/Typography";
export const EmptyPageComponent = () => {
  return (
    <Box
      display={"flex"}
      justifyContent="center"
      flexDirection="column"
      alignItems={"center"}
    >
      <img
        src={EmptyPageImg}
        alt="empy page ! "
        style={{
          maxHeight: "60%",
          maxWidth: "60%",
        }}
      />
      <Typography style={{ marginTop: "30px" }} variant="h4">
        Looks like you're visiting an empty page.
      </Typography>
    </Box>
  );
};
