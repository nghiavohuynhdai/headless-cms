import React, { useState,useEffect } from "react";
// @material-ui/core components
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import InviteUserForm from "pages-sections/admin-form/InviteUserForm";
import {postTag} from "../../store/blog/actions";
import { connect } from 'react-redux';

const styles = (theme) => ({
  root: {
    margin: 0,
  },

  dialogBg: {
    background: "#F5F5F5",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  dialogTitle: {
    color: "#25345C",
    fontWeight: "bold",
    fontSize: 22,
  },
  dialogContent: {
    width: "100% !important",
    padding: "0px 16px 0px 16px !important",
  },


  hello:{
    color: "red",
  }
});

const useStyles = makeStyles(styles);

const DialogTitle = withStyles((theme) => ({
    root: {
      margin: 0,
      padding: 0,
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(-3),
        top: theme.spacing(-3),
        color: theme.palette.grey[500],
        padding: 0
      },
    closeIcon: {
      color: "red"
    }
  }))((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="div">{children}</Typography>
          <IconButton className={classes.closeButton} onClick={onClose}>
            <CloseIcon/>
          </IconButton>
      </MuiDialogTitle>
    );
  });

const DiaLog = (props) => {
  const classes = useStyles(styles);
  const { open, setDialog, setSelectValue, childComponent, header, handleData } = props;

  const [openDialog, setOpenDialog] = useState(open || true);

  React.useEffect(()=>{
    setOpenDialog(open);
  },[open])

  const handleSubmit = (e) => {
      e.preventDefault();
      setOpenDialog(false);
      setDialog(false);

      props.postTag({
            tag: tag,
            slug: slug,
            imageUrl: imageUrl,
            description: description,
            html: html,
            title: title,
        })
  }

  const handleCloseDialog = () => {
      setOpenDialog(false);
      setDialog(false);
  }

  const [tag, setTag] = useState('');
  const [slug, setSlug] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');
  const [html, setHtml] = useState('');
  const [title, setTitle] = useState('');


  return (
    <Dialog open={openDialog} aria-labelledby="customized-dialog-title" className={classes.hello}>
      <div>
        <div className={classes.dialogBg}>
          <DialogTitle children={header} onClose={handleCloseDialog}>Hello</DialogTitle>
          <DialogContent className={classes.dialogContent}>
            <form style={{display:"flex", flexDirection: "column"}} onSubmit={handleSubmit}>
              <input type="text" name="title" placeholder="Listening" onChange={(e)=>{setTag(e.target.value)}} />
              <input type="text" name="slug" placeholder="Slug" onChange={(e)=>{setSlug(e.target.value)}}/>
              <input type="text" name="imgUrl" placeholder="ImageUrl" onChange={(e)=>{setImageUrl(e.target.value)}}/>
              <input type="text" name="description" placeholder="Description" onChange={(e)=>{setDescription(e.target.value)}}/>
              <input type="text" name="html" placeholder="Html" onChange={(e)=>{setHtml(e.target.value)}}/>
              <input type="text" name="title" placeholder="Listening" onChange={(e)=>{setTitle(e.target.value)}}/>
              <input type="submit" value="Submit" />
            </form>
          </DialogContent>
        </div>
      </div>
    </Dialog>
  );
};

const mapStateToProps = () => {
  return {

  };
};

const mapDispatchToProps = {
  postTag
};

export default connect(mapStateToProps, mapDispatchToProps)(DiaLog);

