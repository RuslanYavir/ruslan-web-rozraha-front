import React from "react";

import styles from "./AddComment.module.scss";

import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

export const Index = () => {
  return (
    <>
      <div className={styles.root}>
        <Avatar
          classes={{ root: styles.avatar }}
          src="https://lh3.googleusercontent.com/wxUhp8_SWvcyMiq_v_dGbYqL3begs3sTcjhq1r6teNsYwgUR8XPQ1DB6A-B3tLZxCeBNYRnzUFqcLnCJxjYamGN_Odof1Ry9Fjug1jEOEhNNKyaI48tbQUqj--HbbbUUab7yJZOmIh1SIuqwqijyhylQ6x_SVjN26hvGvGZo87NMMeWWKUgce-wOAHoE8CrQO18MutQ-3VC1zjhmj7eLhPv5U_1yLM3U2xVN8zeX9LjdZGPlK8hSOG7JcDVJkbtO8gROTkdSNAmuVo8hToEYb63K3eOG2ro32fQArjx3aFoJxHUVDlTXHLpz02F4diSs8UeWYFUJOEXKHmkU__AW2G7PxbVyRB7gas5OT2Hpnw3h0lHYbISCZ4X7mnLeq-cSayj4v4X9bFe5yWZULNjKb1YL4z6PtuNAOHMhJDiOU3Br0az2rdmmtwrgOJl6amsjF_xq3tNYc3-c5L3ThuXf-DB7JnTSgzouXTviMCx42vcqY8aVOQ9B-cp3zF8506g1__8l2LX7ASM_x79K0BRRnzY4panApwKucjQUf0dCDm9obAzA4YnzNG93-JJRfEkad_hrWJtyaFMPTKnE2tsVJX-3_CpXfbkPHmgrt_JJZKIZPm-gN7gPq2psJiJvHiO6TX38Pjb_I_XcjecFovuMLSDgdNGwL2ES7S8vhB5XDhTRnzrkZ5B3E2XZ5RFtK8nFNpOWG6-5FHdCI7vxVS-BL3arXY_4Wn_4y17-LjDHNVQebegOaQ48Vp8RRyi_ACkI8jgaPmCGJZlx9-yaujo41Ea4UKuv0lzFZa5TG3ZYdX0sXsrUmarjOYGFvX3q4698M3Po28c7Q7RrIDYS18Wmi8nHUG5IL6UWAU2O3Y4Ze89lIMtgsKX2gIhmawbB8na-X1b5_xvte1PDmdb6FQmy-fi1B0ESta0pGopfhmQ17atENXSF9qNbb7q9HPVUEYZSj3ezPCnRFo4audjvCMezvyhz3SrxGLjH-kM0FsXQ9xlg0GkfSXU2=s640-no?authuser=0"
        />
        <div className={styles.form}>
          <TextField
            label="Write comment"
            variant="outlined"
            maxRows={10}
            multiline
            fullWidth
          />
          <Button variant="contained">Отправить</Button>
        </div>
      </div>
    </>
  );
};
