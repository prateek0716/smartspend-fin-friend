# streamlit_app.py
import streamlit as st
import pandas as pd

st.set_page_config(page_title="SmartSpend – Fin Friend", page_icon="💸")

st.title("SmartSpend – Fin Friend")
st.write("👋 Upload a bank-statement CSV and I’ll give you a quick spending overview.")

# —— Minimal MVP —— #
uploaded = st.file_uploader("Upload a CSV export of your transactions")
if uploaded:
    df = pd.read_csv(uploaded)
    st.subheader("Preview")
    st.dataframe(df.head())

    st.subheader("Top categories")
    top = (
        df["category"]
        .value_counts()
        .head(5)
        .reset_index()
        .rename(columns={"index": "Category", "category": "Txns"})
    )
    st.bar_chart(top.set_index("Category"))
