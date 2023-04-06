import React from "react";

const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    messageText: {
        color: "black",
        fontSize: 16,
    },
};

functionComment(props) {
    return (
        <div style={styles.wrapper}>
            <div style={styles.imageContainer}>
                <img src="https://uploda.wikimedis.org/wikipedia/commons/8/89/Portrait_Placeholder.png" alt="프로필 이미지"
                style={style.image} 
                />
            </div>
            <div style={styles.contentContainer}>
                <span>{styles.nameText}{props.name}</span>
                <span>{styles.commentText}{props.name}</span>
            </div>
        </div>
    )
}

export default Notification;