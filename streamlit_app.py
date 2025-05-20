import streamlit as st
import pandas as pd

st.set_page_config(page_title="SmartSpend – Fin Friend", page_icon="💸")
st.title("SmartSpend – Fin Friend")

uploaded = st.file_uploader("Upload a CSV of your transactions")
if uploaded:
    df = pd.read_csv(uploaded)

    # normalise headers once so any mix of 'Category', ' category ', etc. works
    df.columns = df.columns.str.strip().str.lower()

    st.subheader("Preview")
    st.dataframe(df.head())

    st.subheader("Top categories (by number of transactions)")
    top = (
        df["category"]
        .value_counts()
        .head(5)
        .reset_index()
        .rename(columns={"index": "Category", "category": "Txns"})
    )
    st.bar_chart(top.set_index("Category"))
